class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true, exclusion: { in: [""] }
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :first_name, presence: true
    validates :prof_id, uniqueness: true, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :prof_reviews,
        foreign_key: :author_id,
        class_name: :ProfReview

    has_many :likes,
        foreign_key: :liker_id,
        class_name: :Like

    has_many :prof_saves,
        foreign_key: :saver_id,
        class_name: :ProfSave

    has_many :profs_saved,
        through: :prof_saves,
        source: :prof

    has_many :profs_written_about,
        through: :prof_reviews,
        source: :prof

    has_many :schools_of_profs_written_about,
        through: :profs_written_about,
        source: :school

    has_many :schools_of_profs_saved,
        through: :profs_saved,
        source: :school

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end
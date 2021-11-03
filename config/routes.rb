Rails.application.routes.draw do
  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :profs, except: [:new, :edit] do
      resources :prof_reviews, except: [:new, :edit]
    end
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show, :destroy]
  end

  root to: 'static_pages#root'
end
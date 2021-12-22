Rails.application.routes.draw do
  
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :schools, only: [:create, :index, :show]
    resources :profs, except: [:new, :edit, :delete, :update, :destroy]
    resources :prof_reviews, only: [:create, :update, :destroy, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show, :destroy, :index]
    resources :likes, only: [:create, :destroy]
    resources :prof_saves, only: [:create, :destroy, :index]
  end

  
end
Rails.application.routes.draw do
  devise_for :users
  # devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
# config/routes.rb
get '/home', to: 'home#index'


  namespace :api do
    namespace :v1 do
      resources :servicios, only: [:index]
      resources :rango, only: [:index]
      resources :registro, only: [:index]
      resources :nino, only: [:index]
      resources :role, only: [:index]
      resources :user, only: [:index, :show, :create, :update, :destroy]
    end
  end  

  namespace :api do
    resources :posts
  end
  
end

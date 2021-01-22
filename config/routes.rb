Rails.application.routes.draw do
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  get 's3_presigned_url' => 's3#direct_post'
  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  get 'pages/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'
  namespace :api do
    namespace :v1 do
      resources :images, param: :id
    end
  end

  get '*path', to: 'pages#index', via: :all

end

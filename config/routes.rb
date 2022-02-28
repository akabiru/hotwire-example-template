Rails.application.routes.draw do
  root "articles#index"

  resources :articles
  resources :previews, only: :create
end

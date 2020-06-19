Rails.application.routes.draw do
    root to: 'pages#home'

    root      'home#index'
    # resources :home, only: [:index, :new, :create]

end

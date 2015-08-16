Rails.application.routes.draw do
  root to: 'application#index' 

  resources :users, only: [:new, :create, :show, :destroy]
  resources :messages
  resources :conversations
  resources :projects 

  get 'tech-crunch-data', to: 'tech_crunch_data#data_scrape' 

  #for sessions:   
  get 'sessions/new' => 'sessions#new'
  post 'sessions' => 'sessions#create'
  delete 'sessions' => 'sessions#destroy'

  get '/meetups/display' =>'meetups#display'
end

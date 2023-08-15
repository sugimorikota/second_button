Rails.application.routes.draw do
  Rails.application.routes.draw do
    root 'buttons#index'
    get '/play', to: 'buttons#play'
  end
end

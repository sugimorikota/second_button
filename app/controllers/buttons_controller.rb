class ButtonsController < ApplicationController
  def index
  end
  
  def play
    @button_taken = [true, false].sample
  end
end

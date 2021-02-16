require 'rails_helper'

describe 'Images API', type: :request do
    it 'returns all images - unauthorized' do
        FactoryBot.create(:image, name: 'Title', description: 'description', image_url: 'link')

        get '/api/v1/images'
        expect(response).to have_http_status(401)
    end
    
end
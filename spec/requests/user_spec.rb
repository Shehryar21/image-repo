require 'rails_helper'

describe 'User API', type: :request do
    it 'create user' do
        expect {post '/users', params: {user: {name: "shehryar",
        email: "myemail3@email.com",
        password: "mypassword",
        password_confirmation: "mypassword"}}}.to change{User.count}.from(0).to(1)

        expect(response).to have_http_status(:success)
    end
end
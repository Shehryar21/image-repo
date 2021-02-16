class S3Controller < ApplicationController
  def direct_post
    data = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read',signature_expiration: (Time.now.utc + 15.minutes))
    render json: { data:data}, status: 200
  end
end

class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :image_url
end

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)

    query_bounds = {
      min_lat: bounds['southWest']['lat'],
      max_lat: bounds['northEast']['lat'],
      min_lng: bounds['southWest']['lng'],
      max_lng: bounds['northEast']['lng']
    }
    
    Bench.all.where(lat: query_bounds[:min_lat]..query_bounds[:max_lat]).
      where(lng: query_bounds[:min_lng]..query_bounds[:max_lng])

  end


end

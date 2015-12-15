class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)

    query_bounds = {
      min_lat: bounds['southWest']['lat'],
      max_lat: bounds['northEast']['lat'],
      min_lng: bounds['southWest']['lng'],
      max_lng: bounds['northEast']['lng'],
      min_seats: bounds['minSeats'],
      max_seats: bounds['maxSeats']
    }

    Bench.all.where(lat: query_bounds[:min_lat]..query_bounds[:max_lat]).
      where(lng: query_bounds[:min_lng]..query_bounds[:max_lng]).
      where(seating: query_bounds[:min_seats]..query_bounds[:max_seats])

  end


end

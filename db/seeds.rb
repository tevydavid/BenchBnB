# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.destroy_all

Bench.create!({description: 'Lovely bus stop bench!', lat: 37.751380, lng: -122.433952})
Bench.create!({description: 'Parklet outside just for fun!', lat: 37.751380, lng: -122.431409})
Bench.create!({description: "Parklet outside Martha's", lat: 37.751651, lng: -122.429015})
Bench.create!({description: "Wonderful concrete benches outside the Noe Valley Town Square", lat: 37.751552, lng: -122.428897})

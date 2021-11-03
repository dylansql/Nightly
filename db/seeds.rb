# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all

@admin = User.create!(username: 'tylerWash', email: 'tylergotacrush@ga.com', password: '123456')

puts "#{User.count} users created"

# 3.times do
#   Post.create!(
#     title: Faker::FunnyName,
#     categorey: 'Sleepless Nights',
#     image: 'https://picsum.photos/200',
#     content: Faker::Quote,
#     user: @admin
#   )
# end

# 3.times do
#   Post.create!(
#     title: Faker::FunnyName,
#     categorey: 'Sleep Advice',
#     image: 'https://picsum.photos/200',
#     content: Faker::Quote,
#     user: @admin
#   )
# end

# 3.times do
#   Post.create!(
#     title: Faker::FunnyName,
#     categorey: 'Somethings on My Mind',
#     image: 'https://picsum.photos/200',
#     content: Faker::Quote,
#     user: @admin
#   )
# end

# puts "#{Post.count} posts created"

# @good = Comment.create!(content: 'This is great information')

# @bad = Comment.create!(content: 'This was not great')

# @soso = Comment.create!(content: 'This was decent')

# Post.all.each do |post|
#   rand(1..3).times do
#     post.comments << Comment.all.sample
#   end
# end

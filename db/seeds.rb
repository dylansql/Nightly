# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'tylerWash', email: 'tylergotacrush@ga.com', password: '123456')

puts "#{User.count} users created"

3.times do
  Post.create!(
    title: Faker::FunnyName.name,
    categorey: 'Sleepless Nights',
    image: 'https://picsum.photos/200',
    content: Faker::Quote.famous_last_words,
    user: @admin
  )
end

3.times do
  Post.create!(
    title: Faker::FunnyName.name,
    categorey: 'Sleep Advice',
    image: 'https://picsum.photos/200',
    content: Faker::Quote.famous_last_words,
    user: @admin
  )
end

3.times do
  Post.create!(
    title: Faker::FunnyName.name,
    categorey: 'Somethings on My Mind',
    image: 'https://picsum.photos/200',
    content: 'To be honest, I havent really been able to sleep because of the dreams that I have been getting lately. Does anyone have any advice?',
    user: @admin
  )
end

puts "#{Post.count} posts created"

@post = Post.all.first


@good = Comment.create!(post: @post, user: @admin, content: 'This is great information')

@bad = Comment.create!(post: @post,user: @admin, content: 'This was not great')

@soso = Comment.create!(post: @post, user: @admin, content: 'This was decent')

puts "#{Comment.count} comments created"
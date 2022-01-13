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
@user1 = User.create!(username: 'killkoji', email: 'koji@koji.com', password: '123456')
@user2 = User.create!(username: 'sosaaa', email: 'sosa@koji.com', password: '321654')
@user3 = User.create!(username: 'seeddata', email: 'seeds@koji.com', password: '654321')

puts "#{User.count} users created"

2.times do
  Post.create!(
    title: 'I cant find a good sleep routine',
    categorey: 'Sleep Advice',
    image: 'https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2018/06/Nighttime-photography-02.jpg?fit=1500%2C1061&ssl=1',
    content: 'I currently o to sleep around 4am everyday. I do play my xbox. But only until I et tired. Any advice on this?',
    user: @user2
  )
end

2.times do
  Post.create!(
    title: "Whats the craziest nighttime story you've heard",
    categorey: 'Sleepless Nights',
    image: 'https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2018/06/Nighttime-photography-02.jpg?fit=1500%2C1061&ssl=1',
    content: 'I just wanted to check the website to see who has heard the craziest story.',
    user: @user1
  )
end

2.times do
  Post.create!(
    title: 'I lost my job :(',
    categorey: 'Somethings on My Mind',
    image: 'https://static.wikia.nocookie.net/riseoftheguardians/images/1/11/Sandman.jpg/revision/latest?cb=20121109185958',
    content: 'I really have a heard time sleeping due
              to me losing my job 3 days ago. I really just need somewhere to vent and get my mind off things.',
    user: @user3
  )
end

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
class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :delete_all
  has_many :comments, dependent: :delete_all

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end

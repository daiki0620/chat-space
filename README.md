# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
## usersテーブル
* |Column|Type|Options|
  |------|----|-------|
  |name|string|null:false|
  |e-mail|string|null:false|
  |password|string|null:false|
  |sign_in_count|integer|defult:0,null:false|

##association
-belong_to :group
-belong_to :messerge

## groupsテーブル
  |Column|Type|Options|
  |------|----|-------|
  |user_id|integer|null:false,foreign_key:true|
  |comments_id|integer|null:falae,foreign_key:true|

  ##association
  -belong_to :user
  -belong_to :messerge

##messergeテーブル
  |Column|Type|Options|
  |------|----|-------|
  |user_id|integer|null:false foreign_key :true|
  |group_id|integer|null:false foreign_key :true|
  |image|string|
  |text|text|

  ##association
  -belong_to :user
  -belong_to :messerge

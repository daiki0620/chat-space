## usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null:false|
 |email|string|null:false|
 |password|string|null:false|
 |encrypted_password|string|null:false|
 |sign_in_count|integer|defult:0, null:false|

## association
  - has_many :messages
  - has_many :groupusers
  - has_many :groups  through :groupusers

## groupsテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null:false|

## association
  - has_many :messerges
  - has_many :groupuser
  - has_many :users  through :groupusers

## messergeテーブル
 |Column|Type|Options|
 |------|----|-------|
 |user_id|integer|null:false , foreign_key :true|
 |group_id|integer|null:false , foreign_key :true|
 |image|string|
 |text|text|

## association
  - belong_to :user
  - belong_to :group

## groupuserテーブル
 |Column|Type|Options|
 |------|----|-------|
 |users_id|integer|null:false, foreign_key:true|
 |groups_id|integer|null:false, foreign_key:true|

## association
 - belong_to :user
 - belong_to :group

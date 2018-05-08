## usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false|
 |email|string|null: false|
 |password|string|null: false|
 |encrypted_password|string|null: false|
 |sign_in_count|integer|defult:0, null:false|

## association
  - has_many :messages
  - has_many :group_users
  - has_many :groups, through: group_users

## groupsテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false|

## association
  - has_many :messerges
  - has_many :group_user
  - has_many :users, through: group_users

## messergeテーブル
 |Column|Type|Options|
 |------|----|-------|
 |reference_users|integer|null: false,foreign_key: true|
 |reference_groups|integer|null false,foreign_key: true|
 |image|string|
 |text|text|

## association
  - belong_to :user
  - belong_to :group

## group_userテーブル
 |Column|Type|Options|
 |------|----|-------|
 |reference_users|integer|null: false, foreign_key: true|
 |reference_groups|integer|null: false, foreign_key: true|

## association
 - belong_to :user
 - belong_to :group

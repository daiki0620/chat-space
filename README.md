## usersテーブル
    |Column|Type|Options|
    |------|----|-------|
    |name|string|null:false|
    |e-mail|string|null:false|
    |password|string|null:false|
    |sign_in_count|integer|defult:0,null:false|

## association
  - has_many :messerge
  - has_many :group

## groupsテーブル
    |Column|Type|Options|
    |------|----|-------|
    |name|string|null:false|

## association
  - has_many :messerge
  - has_many :user

## messergeテーブル
    |Column|Type|Options|
    |------|----|-------|
    |user_id|integer|null:false foreign_key :true|
    |group_id|integer|null:false foreign_key :true|
    |image|string|
    |text|text|

## association
  - belong_to :user
  - belong_to :group

## middleテーブル
    |Column|Type|Options|
    |------|----|-------|
    |users_id|integer|null:false,foreign_key:true|
    |groups_id|integer|null:false,foreign_key:true|

##  association
 - belong_to :user
 - belong_to :group

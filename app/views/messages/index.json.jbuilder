json.messages @messages.each do|message|
json.content message.content
json.id message.id
json.name message.user.name
json.image message.image
json.created_at message.created_at
end

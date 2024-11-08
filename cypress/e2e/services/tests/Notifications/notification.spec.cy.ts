https://developer.atlassian.com/cloud/trello/rest/api-group-members/#api-members-id-notificationschannelsettings-put


curl --request PUT \
  --url 'https://api.trello.com/1/members/{id}/notificationsChannelSettings?key=APIKey&token=APIToken' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{
  "channel": "email",
  "blockedKeys": "notification_comment_card"
}'

Trabalha com o modelo de regex com os email

1. xxxxxxxxxxx
2. xxx.xxx.xxx-xx
3. xxx-xxx-xxx-xx
4. x.x.x.x.x.x.x.x.x.x.x
5. x-x-x-x-x-x-x-x-x-x-x
6. plus one number
7. minus one number cpf
8. same gmail and before @
9. correct cpf in the first field and cnpj in the holder_cpf_cnpj field with one less number
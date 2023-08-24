# API Doc


> Base URL: http://atomission.com/api/

| INDEX | 說明 |
|-----|-----|
| [User](#user) | 使用者規則 |
| [Mission](#mission) | 任務資料集 |
| [Target](#target) | 目標資料集 |


## User 
| 說明 | Method | token | path | 參數 | 
| ---- | ------ | ----- | ---- | ---- |
| 取得所有使用者 | GET |   | /users  |   |
| 取得單一使用者 | GET |   | /user/{:id}  |   |
| 註冊使用者 | POST | | /users | account: 使用者帳戶; password: 使用者密碼 | 
| 登入使用者 | POST | | /user/login | account: 使用者帳戶; password: 使用者密碼 |
| 刪除使用者 | DELETE | 必須 | /user/{:id}  |   |
| 修改使用者資料 | PATCH | 必須 | /user/{:id} | data:{"key":"value"} |

### GET `/users`
responses 200
```json
{
    "data": [
        {
            "account":"user@example.com",
            "createDate":"2023-01-01",
            "id":"1",
            "name":"User",
            "password":"password",
            "userData":{...},
        },
        ...
        {
            "account":"user@example.com",
            "createDate":"2023-12-31",
            "id":"99",
            "name":"User",
            "password":"password",
            "userData":{...},
        },
    ]
}
```

### GET `/user/{:id}`
responses 200
```json
{
    "data":{
        "account":"user@example.com",
        "createDate":"2023-01-01",
        "id":"1",
        "name":"User",
        "password":"password",
        "userData":{...},
    }
}
```

### POST `/users`
```json
{
    "account":"user@example.com",
    "password":"password"
}
```
responses 200
```json
{
    "data":{
        "account":"user@example.com",
        "createDate":"2023-01-01",
        "id":"100",
        "name":"User",
        "password":"password",
        "userData":{...},
    }
}
```

### POST `/user/login`
```json
{
    "account":"user@example.com",
    "password":"password"
}
```
responses 200
```json
{
    "data":{
        "account":"user@example.com",
        "createDate":"2023-01-01",
        "id":"1",
        "name":"User",
        "password":"password",
        "userData":{...},
    },
    "token":"sys.token"
}
```

### DELETE `/user/{:id}`
```json
{
    "token":"session.token",
}
```
responses 200
```json
{
    "data":{
        "account":"user@example.com",
        "createDate":"2023-01-01",
        "id":"1",
        "name":"User",
        "password":"password",
        "userData":{...},
    },
}
```

### PATCH `/user/{:id}`
```json
{
    "data key":"new value",
    "token":"session.token",
}
```
responses 200
```json
{
    "data":{
        "account":"user@example.com",
        "createDate":"2023-01-01",
        "id":"1",
        "name":"User",
        "password":"password",
        "userData":{...new},
    },
}
```



## Mission

## Target

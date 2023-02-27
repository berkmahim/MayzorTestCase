
# Mayzor Test Case Projesi

Mayzor Teknoloji şirketine yaptığım başvuru sonucunda gönderilen test case projem


## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/berkmahim/MayzorTestCase
```

Proje dizinine gidin

```bash
  cd my-project
```

Gerekli paketleri yükleyin

```bash
  npm install
```
.env dosyası oluşturun ve aşağıdaki değişkenlerin değerini girin. Cloud database kullanmayacaksanız DB_URI girmenize gerek yok
```bash
  PORT
  DB_URI
  JWT_SECRET
```

```bash
  npm install
```



Sunucuyu çalıştırın

```bash
  npm run start
  npm start
```

### Database

![Uygulama Ekran Görüntüsü](https://i.ibb.co/R0rtGN5/Screenshot-1.png)

```bash
conn() >> cloud database
mongoose.connect() >> local database
```

## Canlı Ortamda Test Edin
https://mayzortestcase-berkmahim.onrender.com/
## API Kullanımı

### Ürün Ekle

```http
  POST http://localhost:3000/products
```

| Parametre | Tip     | 
| :-------- | :------- |
| `name` | `string` | 

### Tüm Ürünleri Getir
```http
  GET http://localhost:3000/products
```
### Kayıt Ol

```http
  POST http://localhost:3000/users/register
```

| Parametre | Tip     | 
| :-------- | :------- |
| `name` | `string` | 
| `surname` | `string` | 
| `email` | `string` | 
| `password` | `string` | 
| `phnNumber` | `string` | 

### Giriş Yap

```http
  POST http://localhost:3000/products
```

| Parametre | Tip     | 
| :-------- | :------- |
| `userData (email veya telefon numarası` | `string` |
| `password` | `string` |

### Favorilere Ekle

```http
  POST http://localhost:3000/products/addToFavorites
```

| Parametre | Tip     | 
| :-------- | :------- |
| `id(eklenecek ürünün id'si)` | `string` |

### Favorileri Listele

```http
  GET http://localhost:3000/products/showFavorites
```
### Favorilerden Çıkar

```http
  POST http://localhost:3000/products/removeFromFavorites
```

| Parametre | Tip     | 
| :-------- | :------- |
| `id(çıkarılacak ürünün id'si)` | `string` |

### Sepete Ekle

```http
  POST http://localhost:3000/cart/addToCart
```

| Parametre | Tip     | 
| :-------- | :------- |
| `id(eklenecek ürünün id'si)` | `string` |

### Sepetten Çıkar

```http
  POST http://localhost:3000/cart/removeFromCart
```

| Parametre | Tip     | 
| :-------- | :------- |
| `id(çıkarılacak ürünün id'si)` | `string` |

### Sipariş Ver (Sepetteki tüm ürünleri satın alır ve sepeti boşaltır)

```http
  POST http://localhost:3000/cart/makeOrder
```

### Yorum Yap

```http
  POST http://localhost:3000/comment/addComment
```

| Parametre | Tip     | 
| :-------- | :------- |
| `comment` | `string` |
| `product` | `string(ürünün id'si)` |

### Çıkış Yap

```http
  GET http://localhost:3000/users/logout
```





   

# ERROR-HANDLING-EXPRESS



#### PACKAGE YANG DIGUNAKAN

1. http-status-codes
   
   ```bash
   yarn add http-status-codes
   ```

2. express-async-errors
   
   ```bash
   yarn add express-async-erros
   ```

3. Bisa langsung clone repository ini dan lakukan instalasi via npm atau yarn
   
   ```bash
   yarn add
   ```
   
   ```bash
   npm i
   ```
   
   

#### SEKEDAR INFORMASI

Kita lakukan extend error pertama dengan membuat class baru yaitu CustomErrorApi

![](/images/customErrorApi.png)

Setelah di extend dibuatlah sebuah custom error, Sebagai contoh kita buat class baru bernama BadRequest :
![](/images/CustomErrorBadRequest.png)

Penjelasan kode diatas 

1. CustomErrorApi => Extend dari Class Error

2. this.statusCode => Kode error yang akan digunakan ketika handling error

3. StatusCodes => Berasal dari package http-status-codes
   
   

Setelah kita membuat custom error selanjutnya kita akan membuat routes khusus untuk display error yang telah kita buat, Maka kodenya akan seperti berikut

![](/home/iyan/Documents/1.%20Folder%20Github/ERROR-HANDLING-EXPRESS/images/errorhandlingroutes.png)
![](/images/errorhandlingroutes.png)

Dan kita daftarkan pada routes pada file app.js kita

![](/home/iyan/Documents/1.%20Folder%20Github/ERROR-HANDLING-EXPRESS/images/appUse.png)
![](/images/appUse.png)


### RESPONSES

**BAD REQUEST**

![](/home/iyan/Documents/1.%20Folder%20Github/ERROR-HANDLING-EXPRESS/images/bad%20request.png)
![](/images/bad%20request.png)

**NOT FOUND**

![](/home/iyan/Documents/1.%20Folder%20Github/ERROR-HANDLING-EXPRESS/images/not%20found.png)
![](/images/not%20found.png)

**UNAUTHORIZED**

![](/home/iyan/Documents/1.%20Folder%20Github/ERROR-HANDLING-EXPRESS/images/unauthorized.png)
![](/images/unauthorized.png)

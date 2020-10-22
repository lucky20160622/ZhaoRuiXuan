1. 使用循环打印九九乘法表

    ```js
    for (let i = 1; i <= 9; i++) {
      var sum = "";
      for (let j = 1; j <= i; j++) {
        sum += j + "*" + i + "=" + i * j + " ";
      }
      console.log(sum);
    }
    ```

2. 使用循环打印图形
    `* `
    `** `
    `***`

    ```js
    for (let i = 1; i <= 3; i++) {
      var sum = "";
  for (let j = 1; j <= i; j++) {
        sum += "*";
      }
      console.log(sum);
    }
    
    ```
    
3. 使用循环打印图形
    `*** `
    `** `
    `*`

    ```js
    for (let i = 3; i >= 1; i--) {
      var sum = "";
  for (let j = 1; j <= i; j++) {
        sum += "*";
      }
      console.log(sum);
    }
    
    ```
    
4. 使用循环打印图形
    `*** `
    `**`
    ` *` 
    `* `
    `** `
    `***`

    ```js
    for (let i = 4; i >= 1; i--) {
      var sum = "";
  for (let j = 1; j <= i; j++) {
        sum += "*";
      }
      console.log(sum);
    }
    for (let i = 2; i <= 4; i++) {
      var sum = "";
      for (let j = 1; j <= i; j++) {
        sum += "*";
      }
      console.log(sum);
    }
    
    ```
    
5. 使用循环打印图形
    `-***`存储x'E'a'a'xaa
    `--**`
    `---*`

    ```js
    for (var i = 3; i > 0; i--) {
      var blank = "",
    stars = "";
      for (var j = 0; j <= 3 - i; j++) {
        blank += "-";
      }
      for (var k = 0; k < i; k++) {
        stars += "*";
      }
      str = str + blank + stars + "\n";
    }
    console.log(str);
    ```
    
6. 使用循环打印图形
    `* ==== `
    `**  === `
    `***   == `
    `****    =`

    ```js
    
    var str = "";
    for (var i = 1; i <= 4; i++) {
      var blank = "",
        stars = "";
      for (var j = 0; j <= 4 - i; j++) {
        //每行输出的的空格数
        blank += "=";
      }
      for (var k = 0; k < i; k++) {
        //每行输出的的*号
        stars += "*";
      }
      var e = "";
      for (let p = 1; p <= i; p++) {
        e += " ";
      }
      str = str + stars + e + blank + "\n";
    }
    console.log(str);
    ```


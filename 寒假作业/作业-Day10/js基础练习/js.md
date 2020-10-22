## js简答题

1. 简述三种循环？
   for循环 ， while循环 ， do...while循环

2. 试着说说你会如何合适使用三种循环？
   for循环：知道循环次数
   while循环：不知道循环次数
   do...while：先执行一次 在判断是否继续循环

3. 什么是死循环？列举一个死循环？
   一个靠自身控制无法终止的程序称为死循环
   while(1);

4. while循环和do...while的区别是什么？
   while循环  ：先判断再执行
   do...while循环:先执行一次，再判断是否继续执行


## js编程题

1. 使用一个for循环按顺序打印出：`10，8，6，4，2，0，-2`

    ```js
    for (var i = 10; i >= -2; i -= 2) {
        console.log(i);
    }
    ```

2. 使用一个while循环按顺序打印出：`2，0，-2，-4，-6，-8，-10`

    ```js
    var i = 2;
    while (i >= -10) {
        console.log(i);
        i -= 2;
    }
    ```

3. 使用一个do...while循环打印出：`100`

    ```js
    do {
        console.log(100);
    } while (false)
    ```

4. 使用一个for循环实现：1-100之间所有偶数的打印
    要求：使用两种方式实现（其中一个方式必须使用 `continue` 关键字）

    ```js
    // 方式一：
    for (var i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    // 方式二：（使用continue）
    for (var i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            continue;
        }
        console.log(i);
    }
    ```
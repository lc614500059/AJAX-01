/**
 * Created by Administrator on 2017/10/7.
 */
function bind(obj, evType, evFn) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, evFn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evType, evFn);
    } else {
        obj["on" + evType] = evFn;
    }
}
(function (window) {
    //��Ϸ���캯��
    function Game() {
        //ʵ����ʳ��
        this.food = new Food();
        //ʵ������
        this.snake = new Snake();
        //ʵ������ͼ,���ص�this��
        this.map = map;
    };
    //�����¼�
    Game.prototype.start = function () {
        this.food.render(this.map);
        this.snake.render(this.map);

        //�˶�
        runSnake(this);
        //�����¼�
        bindKey(this);
    }
    function runSnake(that) {
        var timer = setInterval(function () {
            that.snake.move(that.food, that.map);

            //�����ײ
            //��ȡ��ͷ��λ��
            var headX = that.snake.body[0].x * that.snake.width;
            var headY = that.snake.body[0].y * that.snake.height;
            //��ȡ��ͼ
            var maxX = that.map.offsetWidth;
            var maxY = that.map.offsetHeight;
            //�ж�
            if (headX < 0 || headX >= maxX) {
                clearInterval(timer);
                alert("over");
                return;
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(timer);
                alert("over");
                return;
            }
            that.snake.render(that.map);


        }, 300);
    }

    //�󶨼����¼�
    function bindKey(that) {
        bind(document, "keydown", function (e) {
            e = e || event;
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = "left";
                    break;
                case 39:
                    that.snake.direction = "right";
                    break;
                case 38:
                    that.snake.direction = "up";
                    break;
                case 40:
                    that.snake.direction = "down";
                    break;
            }
        })
    }

    window.Game = Game;
})(window);
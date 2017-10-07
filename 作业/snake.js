/**
 * Created by Administrator on 2017/10/7.
 */
    //       �ߵ����� ��С λ��
(function (window) {

    var snakeEles = [];

    function Snake(width, height, direction) {
        //�ߵĴ�С
        this.width = width || 20;
        this.height = height || 20;
        //����
        this.body = [
            {x: 5, y: 3, color: "red"},
            {x: 4, y: 3, color: "yellow"},
            {x: 3, y: 3, color: "yellow"},
        ];
        //��ͷ�ķ���
        this.direction = direction || "right";

    }

    Snake.prototype.render = function (map) {

        remove();
        //3��div
        for (var i = 0; i < this.body.length; i++) {
            var oDiv = document.createElement("div");
            oDiv.style.borderRadius = "60%";
            oDiv.style.width = this.width + "px";
            oDiv.style.height = this.height + "px";

            oDiv.style.left = this.body[i].x * this.width + "px";
            oDiv.style.top = this.body[i].y * this.height + "px";

            //������ɫ
            oDiv.style.backgroundColor = this.body[i].color;
            //��map�Ͼ��Զ�λ
            oDiv.style.position = "absolute";

            map.appendChild(oDiv);

            snakeEles.push(oDiv);

        }
        //�ߵĹ��캯�����ƶ��¼�
        Snake.prototype.move = function (food,map) {
            for (var i = this.body.length - 1; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }
            switch (this.direction) {
                case "right":
                    this.body[0].x += 1;
                    break;
                case "left":
                    this.body[0].x -= 1;
                    break;
                case "up":
                    this.body[0].y -= 1;
                    break;
                case "down":
                    this.body[0].y += 1;
                    break;

            }
            //��ȡ��ͷ������
            var headX = this.body[0].x * this.width;
            var headY = this.body[0].y * this.height;
            //��ȡʳ�������
            var foodX = food.x;
            var foodY = food.y;
            //�ж�
            if (headX == foodX && headY == foodY) {
                var final = this.body[this.body.length - 1];
                var newJie = {
                    x: final.x,
                    y: final.y,
                    color: final.color
                }
                this.body.push(newJie);
                food.render(map);

            }

        }
        function remove() {
            for (var i = 0; i < snakeEles.length; i++) {
                snakeEles[i].parentNode.removeChild(snakeEles[i]);
            }
            snakeEles = [];
        }
    }

    window.Snake = Snake;
})(window);
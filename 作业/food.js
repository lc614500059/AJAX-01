/**
 * Created by Administrator on 2017/10/7.
 */
    //    ʳ������� width height color x y
(function (window) {

    var oldFood = [];

    function Food(width, height, color, x, y) {
        //��ʼ��
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "blue";
        this.x = x || 0;
        this.y = y || 0;
    }

    Food.prototype.render = function (map) {

        if (oldFood[0]) {
            remove();
        }

        //ʳ����������
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;


        var oDiv = document.createElement("div");
        //div�Ĵ�С
        oDiv.style.width = this.width + "px";
        oDiv.style.height = this.height + "px";
        //div��λ��
        oDiv.style.left = this.x + "px";
        oDiv.style.top = this.y + "px";
        //��ɫ
        this.color = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
        oDiv.style.backgroundColor = this.color;
        //����ڵ�ͼ�ϵľ��Զ�λ
        oDiv.style.position = "absolute";

        map.appendChild(oDiv);

        oldFood.push(oDiv);

    }

    function remove() {
        oldFood[0].parentNode.removeChild(oldFood[0]);
        oldFood.splice(0, 1);
    }


    window.Food = Food;
})(window);
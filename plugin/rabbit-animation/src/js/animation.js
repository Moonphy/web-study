/**
 * Created by Administrator on 2016-7-13.
 */
'use strict';

/**
 * ֡��������
 * @constructor
 */
function Animation(){

}

/**
 * ���һ��ͬ������ȥԤ����ͼƬ
 * @param imglist ͼƬ����
 */
Animation.prototype.loadImage = function (imglist) {

};

/**
 * ���һ���첽��ʱ����ͨ����ʱ�ı�ͼƬ����λ�ã�ʵ��֡����
 * @param ele DOM����
 * @param position ����λ������
 * @param imageUrl ����ͼƬ��ַ
 */
Animation.prototype.changePosition = function (ele, position, imageUrl) {

};

/**
 * ���һ���첽��ʱ����ͨ����ʱ�ı�images��ǩ��src���ԣ�ʵ��֡����
 * @param ele image��ǩ
 * @param imglist ͼƬ����
 */
Animation.prototype.changeSrc = function (ele, imglist) {

};

/**
 * �߼��÷������һ���첽��ʱִ�е�����
 * �������Զ��嶯��ÿִ֡�е�������
 * @param taskFn �Զ���ÿִ֡�е�������
 */
Animation.prototype.enterFrame = function (taskFn) {

};

/**
 * ���һ��ͬ�����񣬿�������һ��������ɺ�ִ�лص�����
 * @param callback �ص�����
 */
Animation.prototype.then = function (callback) {

};


/**
 * ��ʼִ������
 * @param interval �첽��ʱ����ִ�еļ��
 */
Animation.prototype.start = function (interval) {
    
};

/**
 * ���һ��ͬ�����񣬸�������ǻ��˵���һ�������У�
 * ʵ���ظ���һ�������Ч�������Զ����ظ��Ĵ���
 * @param times �ظ�����
 */
Animation.prototype.repeat = function (times) {

};


/**
 * ���һ��ͬ�������൱��repeat()���ѺõĽӿڣ�û�и�repeat()���Σ�������ѭ����һ������
 */
Animation.prototype.repeatForever = function () {

};


/**
 * ���õ�ǰ����ִ�н�������һ������ʼǰ�ĵȴ�ʱ��
 * @param time �ȴ�ʱ��
 */
Animation.prototype.wait = function (time) {

};

/**
 * ��ͣ��ǰ�첽��ʱ����
 */
Animation.prototype.pause = function () {

};

/**
 * ����ִ����һ����ͣ���첽����
 */
Animation.prototype.restart = function () {

};

/**
 * �ͷ���Դ
 */
Animation.prototype.dispose = function () {

};
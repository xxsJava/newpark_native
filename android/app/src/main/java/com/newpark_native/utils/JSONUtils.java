/**
 * @author xxs18
 * @description: TODO
 * @date 2024/1/4 15:56
 */
package com.newpark_native.utils;

public class JSONUtils {


    public static JSONUtils create(){
        return new JSONUtils();
    }

    /**
     * 将JSON数据格式化并保存到文件中
     * @param jsonData 需要输出的json数
     * @param filePath 输出的文件地址
     * @return
     */
//    public boolean createJsonFile(Object jsonData, String filePath) {
//        String content = JSON.toJSONString(jsonData, SerializerFeature.PrettyFormat, SerializerFeature.WriteMapNullValue,
//                SerializerFeature.WriteDateUseDateFormat);
//        // 标记文件生成是否成功
//        boolean flag = true;
//        // 生成json格式文件
//        try {
//            // 保证创建一个新文件
//            File file = new File(filePath);
//            if (!file.getParentFile().exists()) { // 如果父目录不存在，创建父目录
//                file.getParentFile().mkdirs();
//            }
//            if (file.exists()) { // 如果已存在,删除旧文件
//                file.delete();
//            }
//            file.createNewFile();
//            // 将格式化后的字符串写入文件
//            Writer write = new OutputStreamWriter(new FileOutputStream(file), "UTF-8");
//            write.write(content);
//            write.flush();
//            write.close();
//        } catch (Exception e) {
//            flag = false;
//            e.printStackTrace();
//        }
//        return flag;
//    }

}

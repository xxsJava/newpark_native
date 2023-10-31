import PublishView from "../../../views/publish/PublishView";

/*
 * @Author: xxs
 * @Date: 2023-10-31 16:48:43
 * @LastEditTime: 2023-10-31 16:49:07
 * @FilePath: \newpark_native\src\config\routs-config\StackerRout\PublishStackerRout.tsx
 * @Description: 发布子导航
 */
export default {
  PublishStacker: {
    component: PublishView,
    options: {
      title: '发布',
      headerStyle: {
        backgroundColor: 'tomato',
      },
    },
  },
};

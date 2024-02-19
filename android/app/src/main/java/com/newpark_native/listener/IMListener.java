/**
 * @author xxs18
 * @description: TODO
 * @date 2023/12/25 18:02
 */
package com.newpark_native.listener;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.newpark_native.module.IMSDKRNModule;

import java.util.List;

import io.openim.android.sdk.OpenIMClient;
import io.openim.android.sdk.listener.OnAdvanceMsgListener;
import io.openim.android.sdk.listener.OnConversationListener;
import io.openim.android.sdk.listener.OnFriendshipListener;
import io.openim.android.sdk.listener.OnGroupListener;
import io.openim.android.sdk.listener.OnUserListener;
import io.openim.android.sdk.models.BlacklistInfo;
import io.openim.android.sdk.models.C2CReadReceiptInfo;
import io.openim.android.sdk.models.ConversationInfo;
import io.openim.android.sdk.models.FriendApplicationInfo;
import io.openim.android.sdk.models.FriendInfo;
import io.openim.android.sdk.models.GroupApplicationInfo;
import io.openim.android.sdk.models.GroupInfo;
import io.openim.android.sdk.models.GroupMembersInfo;
import io.openim.android.sdk.models.GroupMessageReceipt;
import io.openim.android.sdk.models.KeyValue;
import io.openim.android.sdk.models.Message;
import io.openim.android.sdk.models.RevokedInfo;
import io.openim.android.sdk.models.UserInfo;
import io.openim.android.sdk.models.UsersOnlineStatus;
import io.openim.android.sdk.utils.JsonUtil;

/**
 * @author xxs18
 * @description: IM监听器
 * @date 2023/12/25 18:03
 */
public class IMListener {

    private final static String TAG = "IM-SDK-IMListener";

    public static IMListener create(){
        return new IMListener();
    }

    public void initListener(){
        // Set listener
        //User Profile Change Listener
        OpenIMClient.getInstance().userInfoManager.setOnUserListener(new OnUserListener() {
            @Override
            public void onSelfInfoUpdated(UserInfo userInfo) {

            }

            @Override
            public void onUserStatusChanged(UsersOnlineStatus usersOnlineStatus) {
                //订阅用户在线状态
            }
        });
        //Message-related Listener
        OpenIMClient.getInstance().messageManager.setAdvancedMsgListener(new OnAdvanceMsgListener() {
            @Override
            public void onRecvNewMessage(Message message) {
                //接收消息监听
                WritableMap params = Arguments.createMap();
                params.putString("message", JsonUtil.toString(message));
                IMSDKRNModule.create().sendEventRN("onRecvNewMessage",params);
            }

            @Override
            public void onRecvC2CReadReceipt(List<C2CReadReceiptInfo> list) {

            }

            @Override
            public void onRecvGroupMessageReadReceipt(GroupMessageReceipt groupMessageReceipt) {

            }

            @Override
            public void onRecvMessageRevokedV2(RevokedInfo revokedInfo) {

            }

            @Override
            public void onRecvMessageExtensionsChanged(String s, List<KeyValue> list) {

            }

            @Override
            public void onRecvMessageExtensionsDeleted(String s, List<String> list) {

            }

            @Override
            public void onRecvMessageExtensionsAdded(String s, List<KeyValue> list) {

            }

            @Override
            public void onMsgDeleted(Message message) {

            }

            @Override
            public void onRecvOfflineNewMessage(List<Message> list) {
                //离线消息
            }
        });
        //Friendship Status Change Listener
        OpenIMClient.getInstance().friendshipManager.setOnFriendshipListener(new OnFriendshipListener() {
            @Override
            public void onBlacklistAdded(BlacklistInfo blacklistInfo) {

            }

            @Override
            public void onBlacklistDeleted(BlacklistInfo blacklistInfo) {

            }

            @Override
            public void onFriendApplicationAccepted(FriendApplicationInfo friendApplicationInfo) {
                //好友申请被接受
                Log.i(TAG,"------->好友申请被接受");
                WritableMap params = Arguments.createMap();
                params.putString("data", JsonUtil.toString(friendApplicationInfo));
                IMSDKRNModule.create().sendEventRN("onFriendApplicationAccepted",params);
            }

            @Override
            public void onFriendApplicationAdded(FriendApplicationInfo friendApplicationInfo) {
                Log.i(TAG,"------->好友申请新增通知");
                //好友申请新增通知
                WritableMap params = Arguments.createMap();
                params.putString("data", JsonUtil.toString(friendApplicationInfo));
                IMSDKRNModule.create().sendEventRN("onFriendApplicationAdded",params);
            }

            @Override
            public void onFriendApplicationDeleted(FriendApplicationInfo friendApplicationInfo) {
                //好友申请被删除
                Log.i(TAG,"------->好友申请被删除");
                WritableMap params = Arguments.createMap();
                params.putString("data", JsonUtil.toString(friendApplicationInfo));
                IMSDKRNModule.create().sendEventRN("onFriendApplicationDeleted",params);
            }

            @Override
            public void onFriendApplicationRejected(FriendApplicationInfo friendApplicationInfo) {
                //好友申请被拒绝
                Log.i(TAG,"------->好友申请被拒绝");
                WritableMap params = Arguments.createMap();
                params.putString("data", JsonUtil.toString(friendApplicationInfo));
                IMSDKRNModule.create().sendEventRN("onFriendApplicationRejected",params);
            }

            @Override
            public void onFriendInfoChanged(FriendInfo friendInfo) {
                //好友资料变更通知
                Log.i(TAG,"------->好友资料变更通知");
                WritableMap params = Arguments.createMap();
                params.putString("data", JsonUtil.toString(friendInfo));
                IMSDKRNModule.create().sendEventRN("onFriendInfoChanged",params);
            }

            @Override
            public void onFriendAdded(FriendInfo friendInfo) {
                //	好友新增通知
                Log.i(TAG,"------->好友新增通知");
                WritableMap params = Arguments.createMap();
                params.putString("data", JsonUtil.toString(friendInfo));
                IMSDKRNModule.create().sendEventRN("onFriendAdded",params);
            }

            @Override
            public void onFriendDeleted(FriendInfo friendInfo) {
                // 好友删除通知
                Log.i(TAG,"------->好友删除通知");
                WritableMap params = Arguments.createMap();
                params.putString("data", JsonUtil.toString(friendInfo));
                IMSDKRNModule.create().sendEventRN("onFriendDeleted",params);
            }
        });
        //Conversation-related Listener
        OpenIMClient.getInstance().conversationManager.setOnConversationListener(new OnConversationListener() {
            @Override
            public void onConversationChanged(List<ConversationInfo> list) {

            }

            @Override
            public void onNewConversation(List<ConversationInfo> list) {

            }

            @Override
            public void onSyncServerFailed() {

            }

            @Override
            public void onSyncServerFinish() {

            }

            @Override
            public void onSyncServerStart() {

            }

            @Override
            public void onTotalUnreadMessageCountChanged(int i) {

            }
        });
        //Group-related Listener
        OpenIMClient.getInstance().groupManager.setOnGroupListener(new OnGroupListener() {
            @Override
            public void onGroupApplicationAccepted(GroupApplicationInfo groupApplicationInfo) {

            }

            @Override
            public void onGroupApplicationAdded(GroupApplicationInfo groupApplicationInfo) {

            }

            @Override
            public void onGroupApplicationDeleted(GroupApplicationInfo groupApplicationInfo) {

            }

            @Override
            public void onGroupApplicationRejected(GroupApplicationInfo groupApplicationInfo) {

            }

            @Override
            public void onGroupDismissed(GroupInfo groupInfo) {

            }

            @Override
            public void onGroupInfoChanged(GroupInfo groupInfo) {

            }

            @Override
            public void onGroupMemberAdded(GroupMembersInfo groupMembersInfo) {

            }

            @Override
            public void onGroupMemberDeleted(GroupMembersInfo groupMembersInfo) {

            }

            @Override
            public void onGroupMemberInfoChanged(GroupMembersInfo groupMembersInfo) {

            }

            @Override
            public void onJoinedGroupAdded(GroupInfo groupInfo) {

            }

            @Override
            public void onJoinedGroupDeleted(GroupInfo groupInfo) {

            }
        });
    }

}

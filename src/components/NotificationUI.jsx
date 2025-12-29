import { useState } from "react";
import "./NotificationUI.css";

const NotificationUI = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Message",
      message: "Your friend sent you a message",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      title: "System Update",
      message: "System will restart tonight",
      time: "10 min ago",
      unread: true,
    },
   
    {
    id: 3,
    title: "Order Shipped",
    message: "Your order #12345 is on the way",
    time: "20 min ago",
    unread: true,
    },
    {
    id: 4,
    title: "Security Alert",
    message: "Login detected from a new device",
    time: "1 hr ago",
    unread: false,
    },
    {
    id:5,
    title:"Instergram",
    message:"Someone mentioned you in a comment",
    time:"45 min ago",
    unread:true,
    }
  ]);

  // Toggle Read / Unread
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, unread: false } : n
      )
    );
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="notification-container">
      <h2>
        Notifications
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
      </h2>

      {notifications.map((n) => (
        <div
          key={n.id}
          className={`notification ${n.unread ? "unread" : ""}`}
          onClick={() => markAsRead(n.id)}
        >
          {n.unread && <span className="dot"></span>}

          <div>
            <h3>{n.title}</h3>
            <p>{n.message}</p>
            <span className="time">{n.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationUI;

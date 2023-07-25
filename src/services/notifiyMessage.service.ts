import { notification } from "antd";

import { i18n } from "@/translations/helpers/Internationalization";


type NotificationStatuses = "success" | "info" | "error" | "warning";

type NotificationPlacement = "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight";

type BaseNotifyProps = {
  message: string;
  description?: string;
  type?: NotificationStatuses;
  duration?: number;
  key?: string;
  translate?: boolean;
  placement?: NotificationPlacement;
  icon?: React.ReactNode;
  className?: string;
};

const baseNotify = ({ message, description, type, duration = 3, key, translate = true, placement, icon, className }: BaseNotifyProps) => {
  notification.open({
    message: translate ? i18n.translate(message) : message,
    description,
    type,
    duration,
    key,
    placement,
    icon,
    className,
  });
};

const Success = ({ message, description, type = "success", duration = 3, key }: BaseNotifyProps) => {
  baseNotify({ message, description, type, duration, key });
};

const Information = ({ message, description, type = "info", duration = 3, key }: BaseNotifyProps) => {
  baseNotify({ message, description, type, duration, key });
};

const Error = ({ message, description, type = "error", duration = 3, key }: BaseNotifyProps) => {
  baseNotify({ message, description, type, duration, key });
};

const Warning = ({ message, description, type = "warning", duration = 3, key }: BaseNotifyProps) => {
  baseNotify({ message, description, type, duration, key });
};

const Custom = ({ message, description, type, duration, key, placement, icon, className }: BaseNotifyProps) => {
  baseNotify({ message, description, type, duration, key, placement, icon, className });
};

export const NotifyMessageService = {
  Success,
  Information,
  Error,
  Warning,
  Custom
};
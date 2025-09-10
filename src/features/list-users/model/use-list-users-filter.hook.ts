import { useListUsersContext } from "./use-list-users-context.hook";

export const useListUsersFilter = () => {
  const { isFilterPanelVisible, setFilterPanelVisible } = useListUsersContext();

  const onOpenChange = (opened: boolean) => setFilterPanelVisible(opened);
  return { isFilterPanelVisible, onOpenChange };
};

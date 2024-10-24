import Reduxprovider from "@/provider";

const CommonLayout = ({ children }) => {
  return <Reduxprovider>{children}</Reduxprovider>;
};

export default CommonLayout;

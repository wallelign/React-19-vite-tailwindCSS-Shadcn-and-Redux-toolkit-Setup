import HeaderComponent from "@/components/dashboard/layout/HeaderComponent";
import SidebarComponent from "@/components/dashboard/layout/SidebarComponent";
import AddPackageStepper from "@/components/dashboard/package/AddPackageStepper";
// import AddPackageComponent from "@/components/dashboard/package/AddPackageComponent";

const AddPackage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-row">
      {/* Sidebar */}
      <SidebarComponent />

      {/* Main Content */}
      <main className="flex-1 p-6 ">
        <HeaderComponent />
        {/* <AddPackageComponent /> */}
        <AddPackageStepper />
      </main>
    </div>
  );
};

export default AddPackage;

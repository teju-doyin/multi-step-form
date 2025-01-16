import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useForm = () => useContext(FormContext)

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        selectedPlan: null,
        isYearly: false,
    })
    const [isYearly, setIsYearly] = useState(false)
    const [selectedAddOn, setSelectedAddOn] = useState([])
    
    const handleToggleSwitch = () => setIsYearly( (prev)=> !prev)
    const handleSelectedAddOn = (addOn) => {
        // setShowErrorMessage(false)
        setSelectedAddOn((prev) => {
          if (prev.find((item) => item.id === addOn.id)) {
            return prev.filter((item) => item.id !== addOn.id);
          } else {
            return [...prev, addOn];
          }
        });
      };

    return (
        <FormContext.Provider 
            value={{ 
                formData, 
                setFormData,
                isYearly,
                handleToggleSwitch,
                selectedAddOn,
                handleSelectedAddOn
            }}>
            {children}
        </FormContext.Provider>
    )
}
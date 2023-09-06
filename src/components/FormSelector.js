import React from 'react';
import SearchFormOneWay from './SearchFormOneWay';
import SearchFormOneWayRange from './SearchFormOneWayRange';
import SearchFormReturn from './SearchFormReturn';
import SearchFormReturnRange from './SearchFormReturnRange';

const FormComponentMapping = {
  oneWay: {
    component: SearchFormOneWay,
    label: 'One-Way Flight Search',
  },
  oneWayRange: {
    component: SearchFormOneWayRange,
    label: 'One-Way Range Flight Search',
  },
  return: {
    component: SearchFormReturn,
    label: 'Return Flight Search',
  },
  returnRange: {
    component: SearchFormReturnRange,
    label: 'Return Range Flight Search',
  },
};

function FormSelector({ searchParams, handleSearchChange, fetchFlights, loading, selectedForm, handleFormChange }) {

  const renderSelectedForm = () => {
    const SelectedFormComponent = FormComponentMapping[selectedForm].component;
    return (
      <SelectedFormComponent
        searchParams={searchParams}
        handleSearchChange={handleSearchChange}
        fetchFlights={fetchFlights}
        loading={loading}
      />
    );
  };

  return (
    <div className="form-selector">
      <div className="radio-container">
        {Object.keys(FormComponentMapping).map(formKey => (
          <div className="radio-option" key={formKey}>
            <input
              type="radio"
              id={`${formKey}Form`}
              name="formSelector"
              value={formKey}
              checked={selectedForm === formKey}
              onChange={() => handleFormChange(formKey)}
            />
            <label htmlFor={`${formKey}Form`} className="radio-label">
              {FormComponentMapping[formKey].label}
            </label>
          </div>
        ))}
      </div>
      <div className="selected-form">
        {renderSelectedForm()}
      </div>
    </div>
  );
}

export default FormSelector;

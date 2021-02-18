import React, { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import CustomSelect from "react-select";
import * as S from "./styles";

const Select = ({ options, defaultValue, label, onChange, isClearable }) => {
  const [customOptions, setCustomOptions] = useState([]);

  useEffect(() => {
    if (options && options.length) {
      setCustomOptions(
        options.map((option) => {
          return {
            value: option.value,
            label: option.label,
          };
        })
      );
    } else {
      setCustomOptions([]);
    }
  }, [options]);

  return (
    <S.Container>
      <S.Label>{label || "*"}</S.Label>

      <CustomSelect
        options={customOptions}
        placeholder="Select an option"
        value={customOptions.find((option) => option.value === defaultValue)}
        isDisabled={!customOptions.length}
        isClearable={isClearable}
        onChange={(e) => onChange((e && e.value) || "")}
      />
    </S.Container>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isClearable: PropTypes.bool,
};

export default memo(Select);

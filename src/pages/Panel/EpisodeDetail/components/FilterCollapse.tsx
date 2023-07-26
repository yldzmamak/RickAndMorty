import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { DeleteOutlined } from "@ant-design/icons";
import { Button, Collapse, Radio, Row } from "antd";

import { CommonActions } from "@/features/common";
import { useAppDispatch } from "@/hooks/useStore";
import { ICollapse, collapseData } from "@/mock/collapse";

const { Panel } = Collapse;

const FilterCollapse = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [radioValues, setRadioValues] = useState<{ [key: string]: string }>({});

  const onChange = (value: string, filterKey: string) => {
    setRadioValues((prevValues) => ({ ...prevValues, [filterKey]: value }));
    value === "" && setRadioValues((prevValues) => ({ ...prevValues, [filterKey]: "" }));
    switch (filterKey) {
   
      case "status":
        dispatch(CommonActions.setCharacterStatus(value));
        break;

      case "species":
        dispatch(CommonActions.setCharacterSpecies(value));
        break;

      case "gender":
        dispatch(CommonActions.setCharacterGender(value));
        break;

      default:
        break;
    }
  };

  return (
    <Collapse accordion className="filter-collapse">
      {collapseData.map((item: ICollapse) => {
        return (
          <Panel header={t(`label.${item.filterKey}`)} key={item.id}>
            <Row className="justifyEnd">
              <Button
                type="link"
                icon={<DeleteOutlined />}
                value="small"
                onClick={() => onChange("", item.filterKey)}
              >
                {t("button.clear")}
              </Button>
            </Row>
            <Radio.Group
              value={radioValues[item.filterKey]}
              options={item.options}
              onChange={(e) => onChange(e.target.value, item.filterKey)}
              optionType="button"
              buttonStyle="solid"
            />
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default FilterCollapse;

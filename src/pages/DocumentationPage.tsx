import Custombadge from "@/components/DocumentComponents/CustomBadge";
import Default from "@/components/DocumentComponents/Default";
import GetStarted from "@/components/DocumentComponents/GetStarted";
import Restriction from "@/components/DocumentComponents/Restriction";
import AddBadge from "@/components/DocumentComponents/AddBadge";
import UpdateBadge from "@/components/DocumentComponents/UpdateBadge";
import DeleteBadge from "@/components/DocumentComponents/DeleteBadge";
import GridBadges from "@/components/DocumentComponents/GridBadges";
import React, { useEffect, useRef, useState } from "react";
import Widgets from "@/components/DocumentComponents/Widgets";
import MultipleBadges from "@/components/DocumentComponents/MultipleBadges";
import SingleBadge from "@/components/DocumentComponents/SingleBadge";
import TemplateRowCol from "@/components/DocumentComponents/TemplateRowCol";
import GridGap from "@/components/DocumentComponents/GridGap";
import Indentations from "@/components/DocumentComponents/Indentations";
import IndentSize from "@/components/DocumentComponents/IndentSize";
import FitGrid from "@/components/DocumentComponents/FitGrid";
import GridAlign from "@/components/DocumentComponents/GridAlign";

const DocumentationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Get Started");
  const [activeDropdown, setActiveDropdown] = useState("Introduction");
  const descriptionContentRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {}, []);

  // const options = [
  //   "Get Started",
  //   "Restriction",
  //   "Default",
  //   "Custom Badges",
  //   "Add Badge",
  //   "Update Badge",
  //   "Delete Badge",
  //   "Gridding Badges",
  //   "Using Widgets",
  // ];

  useEffect(() => {
    if (window.screen.width <= 900 && descriptionContentRef.current) {
      window.scrollTo({
        top: descriptionContentRef.current.offsetTop + 120,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <div className="documentation-page">
      {/* <h1>Documentation</h1> */}
      {/* <br /> */}
      <div className="grid-view">
        <div className="option-list">
          <div className="dropdown">
            <input
              hidden={true}
              checked={activeDropdown === "Introduction"}
              onChange={() => {
                if (activeDropdown === "Introduction") {
                  setActiveDropdown("");
                } else {
                  setActiveDropdown("Introduction");
                }
              }}
              className="sr-only"
              name="state-dropdown1"
              id="state-dropdown1"
              type="checkbox"
            />
            <label
              aria-label="dropdown scrollbar"
              htmlFor="state-dropdown1"
              className="trigger"
            >
              Introduction
            </label>

            <ul className="list webkit-scrollbar" role="list" dir="auto">
              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Get Started" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Get Started")}
                >
                  Get Started
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Restrictions" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Restrictions")}
                >
                  Restrictions
                </div>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <input
              hidden={true}
              checked={activeDropdown === "Badges"}
              onChange={() => {
                if (activeDropdown == "Badges") {
                  setActiveDropdown("");
                } else {
                  setActiveDropdown("Badges");
                }
              }}
              className="sr-only"
              name="state-dropdown2"
              id="state-dropdown2"
              type="checkbox"
            />
            <label
              aria-label="dropdown scrollbar"
              htmlFor="state-dropdown2"
              className="trigger"
            >
              Badges
            </label>

            <ul className="list webkit-scrollbar" role="list" dir="auto">
              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Default" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Default")}
                >
                  Default Badges
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Custom Badges" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Custom Badges")}
                >
                  Custom Badges
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Add Badge" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Add Badge")}
                >
                  Add Badges
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Update Badge" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Update Badge")}
                >
                  Update Badges
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Delete Badge" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Delete Badge")}
                >
                  Delete Badges
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Single Badge" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Single Badge")}
                >
                  Single Badge
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Multiple Badges" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Multiple Badges")}
                >
                  Multiple Badges
                </div>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <input
              hidden={true}
              checked={activeDropdown === "Gridding"}
              onChange={() => {
                if (activeDropdown === "Gridding") {
                  setActiveDropdown("");
                } else {
                  setActiveDropdown("Gridding");
                }
              }}
              className="sr-only"
              name="state-dropdown3"
              id="state-dropdown3"
              type="checkbox"
            />
            <label
              aria-label="dropdown scrollbar"
              htmlFor="state-dropdown3"
              className="trigger"
            >
              Gridding
            </label>

            <ul className="list webkit-scrollbar" role="list" dir="auto">
              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Gridding" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Basic Gridding")}
                >
                  Basic Gridding
                </div>
              </li>
              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "GridGap" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("GridGap")}
                >
                  Gap
                </div>
              </li>
              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "TemplateRowCol" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("TemplateRowCol")}
                >
                  Template Grid
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Indentations" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Indentations")}
                >
                  Indentations
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "IndentationSize" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("IndentationSize")}
                >
                  Indent Size
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "FitGrid" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("FitGrid")}
                >
                  Fit
                </div>
              </li>

              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "GridAlign" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("GridAlign")}
                >
                  Align
                </div>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <input
              hidden={true}
              checked={activeDropdown === "Widgets"}
              onChange={() => {
                if (activeDropdown === "Widgets") {
                  setActiveDropdown("");
                } else {
                  setActiveDropdown("Widgets");
                }
              }}
              className="sr-only"
              name="state-dropdown4"
              id="state-dropdown4"
              type="checkbox"
            />
            <label
              aria-label="dropdown scrollbar"
              htmlFor="state-dropdown4"
              className="trigger"
            >
              Widgets
            </label>

            <ul className="list webkit-scrollbar" role="list" dir="auto">
              <li className="listitem" role="listitem">
                <div
                  className={`sub-option ${
                    activeTab === "Using Widgets" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Using Widgets")}
                >
                  Using Widgets
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="description-content" ref={descriptionContentRef}>
          <div
            className={`content ${activeTab === "Get Started" ? "active" : ""}`}
          >
            <GetStarted />
          </div>
          <div
            className={`content ${
              activeTab === "Restrictions" ? "active" : ""
            }`}
          >
            <Restriction />
          </div>
          <div className={`content ${activeTab === "Default" ? "active" : ""}`}>
            <Default />
          </div>
          <div
            className={`content ${
              activeTab === "Custom Badges" ? "active" : ""
            }`}
          >
            <Custombadge />
          </div>
          <div
            className={`content ${activeTab === "Add Badge" ? "active" : ""}`}
          >
            <AddBadge />
          </div>
          <div
            className={`content ${
              activeTab === "Update Badge" ? "active" : ""
            }`}
          >
            <UpdateBadge />
          </div>
          <div
            className={`content ${
              activeTab === "Delete Badge" ? "active" : ""
            }`}
          >
            <DeleteBadge />
          </div>
          <div
            className={`content ${
              activeTab === "Single Badge" ? "active" : ""
            }`}
          >
            <SingleBadge />
          </div>
          <div
            className={`content ${
              activeTab === "Multiple Badges" ? "active" : ""
            }`}
          >
            <MultipleBadges />
          </div>
          <div
            className={`content ${
              activeTab === "Basic Gridding" ? "active" : ""
            }`}
          >
            <GridBadges />
          </div>

          <div className={`content ${activeTab === "GridGap" ? "active" : ""}`}>
            <GridGap />
          </div>
          <div
            className={`content ${
              activeTab === "TemplateRowCol" ? "active" : ""
            }`}
          >
            <TemplateRowCol />
          </div>
          <div
            className={`content ${
              activeTab === "Indentations" ? "active" : ""
            }`}
          >
            <Indentations />
          </div>
          <div
            className={`content ${
              activeTab === "IndentationSize" ? "active" : ""
            }`}
          >
            <IndentSize />
          </div>
          <div className={`content ${activeTab === "FitGrid" ? "active" : ""}`}>
            <FitGrid />
          </div>
          <div
            className={`content ${activeTab === "GridAlign" ? "active" : ""}`}
          >
            <GridAlign />
          </div>
          <div
            className={`content ${
              activeTab === "Using Widgets" ? "active" : ""
            }`}
          >
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;

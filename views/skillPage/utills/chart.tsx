import React, { useEffect, useRef } from "react";

const ForceDirectedTree: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadChart = async () => {
      const am5 = await import("@amcharts/amcharts5");
      const am5hierarchy = await import("@amcharts/amcharts5/hierarchy");
      const am5themes_Animated = await import(
        "@amcharts/amcharts5/themes/Animated"
      );

      if (chartRef.current) {
        let root = am5.Root.new(chartRef.current);

        root.setThemes([am5themes_Animated.default.new(root)]);

        let data = {
          value: 0,
          children: [
            {
              name: "Front-end",
              children: [
                {
                  name: "Framework",
                  children: [
                    {
                      name: "React",
                      value: 6,
                    },
                    {
                      name: "Next.js",
                      value: 6,
                    },
                  ],
                },
                {
                  name: "CSS Framework",
                  children: [
                    {
                      name: "Bootstrap",
                      value: 6,
                    },
                    {
                      name: "Tailwind CSS",
                      value: 6,
                    },
                  ],
                },
                {
                  name: "Mobile",
                  children: [
                    {
                      name: "Flutter",
                      value: 6,
                    },
                  ],
                },
              ],
            },
            {
              name: "Back-end",
              children: [
                {
                  name: "JavaScript",
                  children: [
                    {
                      name: "Node.js",
                      value: 6,
                    },
                  ],
                },
                {
                  name: "PHP",
                  value: 6,
                },
              ],
            },
            {
              name: "Database",
              children: [
                {
                  name: "MySQL",
                  value: 6,
                },
                {
                  name: "Supabase",
                  value: 6,
                },
                {
                  name: "PostgreSQL",
                  value: 6,
                },
              ],
            },
          ],
        };

        let container = root.container.children.push(
          am5.Container.new(root, {
            width: am5.percent(100),
            height: am5.percent(100),
            layout: root.verticalLayout,
          })
        );

        let series = container.children.push(
          am5hierarchy.ForceDirected.new(root, {
            singleBranchOnly: false,
            downDepth: 2,
            topDepth: 1,
            initialDepth: 3,
            valueField: "value",
            categoryField: "name",
            childDataField: "children",
            idField: "name",
            linkWithField: "linkWith",
            manyBodyStrength: -10,
            centerStrength: 0.8,
            nodePadding: 10,
            minRadius: 35,
          })
        );

        series.get("colors")?.setAll({
          step: 4,
        });

        series.links.template.set("strength", 0.5);

        series.data.setAll([data]);

        series.set("selectedDataItem", series.dataItems[0]);

        series.appear(1000, 100);

        return () => {
          root.dispose();
        };
      }
    };

    loadChart();
  }, []);

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default ForceDirectedTree;

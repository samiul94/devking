import type { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import type { Technology as TechnologyType } from "../../techTypes";

type TechnologyProps = {
  technologies: TechnologyType[];
  selectedTechnologies: TechnologyType[];
  setSelectedTechnologies: Dispatch<SetStateAction<TechnologyType[]>>;
};

const Technology = ({
  technologies,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologyProps) => {
  const handleAddToStack = (technology: TechnologyType) => {
    const duplicate = selectedTechnologies.some((item) => item.id === technology.id);
    if (duplicate) {
      toast.error(`${technology.name} is already in your stack.`);
      return;
    }

    const sameCategory = selectedTechnologies.find(
      (item) => item.category === technology.category
    );
    if (sameCategory) {
      toast.error(
        `You already selected ${sameCategory.name} for ${technology.category}.`
      );
      return;
    }

    setSelectedTechnologies((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (technology: TechnologyType) => {
    setSelectedTechnologies((current) =>
      current.filter((item) => item.id !== technology.id)
    );
    toast.success(`${technology.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.error("Your stack is already empty.");
      return;
    }
    setSelectedTechnologies([]);
    toast.success("All technologies removed from your stack.");
  };

  return (
    <section className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="tech-section-title">
            Explore the <span className="tech-gradient-text">Technologies</span>
          </h2>
          <p className="tech-section-description">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="tech-layout">
          <div className="technology-grid">
            {technologies.map((technology) => (
              <article className="technology-card" key={technology.id}>
                <div className="technology-card-top">
                  <div
                    className={`technology-icon technology-icon-${technology.name
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    {technology.icon}
                  </div>
                  {technology.badge && (
                    <span className={`technology-badge ${technology.badgeClass}`}>
                      {technology.badge}
                    </span>
                  )}
                </div>

                <h3 className="technology-name">{technology.name}</h3>
                <p className="technology-description">{technology.description}</p>

                <div className="technology-meta">
                  <span className="technology-category">{technology.category}</span>
                  <span className="technology-level">{technology.level}</span>
                  <span className="technology-rating">
                    <span>★</span> {technology.rating}
                  </span>
                </div>

                <button
                  type="button"
                  className="add-stack-button"
                  onClick={() => handleAddToStack(technology)}
                >
                  Add to Stack
                </button>
              </article>
            ))}
          </div>

          <aside className="stack-panel">
            <h3 className="stack-title">Your Stack</h3>
            <p className="stack-count">
              {selectedTechnologies.length} Technology
              {selectedTechnologies.length === 1 ? "" : "ies"} Selected
            </p>

            <div className="stack-items">
              {selectedTechnologies.length === 0 ? (
                <p className="stack-empty">No technologies selected yet.</p>
              ) : (
                selectedTechnologies.map((technology) => (
                  <div className="stack-item" key={technology.id}>
                    <div className="stack-item-left">
                      <div className="stack-item-icon">{technology.icon}</div>
                      <div className="stack-item-info">
                        <span className="stack-item-name">{technology.name}</span>
                        <span className="stack-item-category">
                          {technology.category}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="stack-remove"
                      onClick={() => handleRemove(technology)}
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            <button type="button" className="remove-all-button" onClick={handleRemoveAll}>
              Remove All
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technology;
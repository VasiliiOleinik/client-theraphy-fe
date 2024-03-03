import { handleError } from "../../utils/functions";

const API_URL = import.meta.env.DEV
  ? "http://83.85.157.106:8000/api/"
  : "/api/";

export const fetchAllThemes = async () => {
  try {
    const response = await fetch(API_URL + "fetch_all_themes");
    if (!response.ok) throw new Error("Something went wrong");
    const data = await response.json();
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const checkThemeExistence = async (theme) => {
  try {
    const response = await fetch(`${API_URL}check_theme_existence`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ theme_name: theme }),
    });
    if (!response.ok) {
      throw new Error(`Failed to check theme. Status: ${response.status}`);
    }
    const result = await response.json();
    return result.exists;
  } catch (error) {
    handleError(error);
  }
};
export const saveTheme = async (theme) => {
  try {
    const response = await fetch(`${API_URL}save_theme`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ theme_name: theme }),
    });
    if (!response.ok) {
      throw new Error(`Failed to check theme. Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    handleError(error);
  }
};
export const deleteTheme = async (id) => {
  try {
    const response = await fetch(`${API_URL}delete_theme`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      throw new Error(`Failed to delete theme. Status: ${response.status}`);
    }
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Error deleting theme:", error);
    throw new Error("Failed to delete theme");
  }
};
export const fetchThemePages = async (id) => {
  try {
    const response = await fetch(API_URL + "fetch_theme_pages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) throw new Error("Something went wrong");
    const data = await response.json();
    return {
      themeName: data.theme_name,
      pages: data.pages,
    };
  } catch (error) {
    handleError(error);
  }
};
export const savePage = async (pageData) => {
  try {
    const response = await fetch(API_URL + "save_page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pageData),
    });
    const successRes = await response.json();
    return successRes.success;
  } catch (error) {
    handleError(error);
  }
};
export const searchText = async (text) => {
  try {
    const response = await fetch(API_URL + "dynamic_search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(text),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      const searchResponse = jsonResponse.results;
      return searchResponse;
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    handleError(error);
  }
};
export const performCategorySearch = async (query) => {
  try {
    const response = await fetch(API_URL + "perform_category_search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    handleError(error);
  }
};
export const fetchSubCategoryOrWord = async (body) => {
  try {
    const response = await fetch(API_URL + "fetch_next_subcategories_or_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    handleError(error);
  }
};

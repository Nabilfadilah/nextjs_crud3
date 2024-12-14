"use client";

import {deleteEmployee} from "@/lib/action";

export const DeleteButton = ({id}: {id: string}) => {
  const handleDelete = async (formData: FormData) => {
    const employeeId = formData.get("id") as string;
    const response = await deleteEmployee(employeeId);

    if (response.success) {
      alert(response.message);
      window.location.reload(); // Refresh halaman setelah berhasil
    } else {
      alert(response.message); // Tampilkan pesan jika gagal
    }
  };

  return (
    <form action={handleDelete}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-error">Delete</button>
    </form>
  );
};

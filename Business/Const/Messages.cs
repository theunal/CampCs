﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Const
{
    public static class Messages
    {
        public static string ProductAdded = "Ürün Eklendi.";
        public static string ProductNameInvalid = "Ürün İsmi Geçersiz.";
        public static string MaintenanceTime = "Sistem Bakımda";
        public static string ProductsListed = "Ürünler başarıyla getirildi.";
        public static string ProductListed = "Ürün başarıyla getirildi.";
        public static string ProductsListedByCategoryId = "Ürünler kategoriye göre getirildi.";

        public static string CheckProductCountOfCategoryError = "Bu kategoride daha fazla ürün eklenemez.";
        public static string ProductNameAlreadyExists = "Bu ürün adına sahip ürün zaten mevcut.";
        public static string CategoryLimitExceeded = "Kategori sınırı aşıldı.";
    }
}

package com.example.springboot.service.impl;

import com.example.springboot.entity.Package;
import com.example.springboot.mapper.PackageMapper;
import com.example.springboot.service.IPackageService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author 
 * @since 2022-05-15
 */
@Service
public class PackageServiceImpl extends ServiceImpl<PackageMapper, Package> implements IPackageService {

}
